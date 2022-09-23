import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { ModalProps } from '../../types';
import { Button } from '@obrigadosenior/core';
import styles from './Modal.module.scss';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export const Modal = ({
  closeIcon,
  title,
  children,
  onClickIcon,
  open = false,
  overlayElement,
  className,
}: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, height] = useWindowSize();
  useEffect(() => modalRef?.current?.classList.add('hide'), []);

  useEffect(() => {
    const { style } = (document && document.documentElement) || {};

    const { height: contentHeight = 3000 } = contentRef?.current?.getBoundingClientRect() || {};
    const { height: headerHeight = 3000 } = headerRef?.current?.getBoundingClientRect() || {};

    const bothHeight = contentHeight + headerHeight;
    const maxHeight = height * 0.95;
    const modalHeight = bothHeight > maxHeight ? maxHeight : bothHeight;

    if (style) {
      style.setProperty('--modal-max-height', `${maxHeight}px`);
      style.setProperty('--modal-height', `${modalHeight}px`);
      style.setProperty('--modal-overlay-height', `${height - modalHeight + 40}px`);
      style.setProperty('--modal-content-overflow', modalHeight >= maxHeight ? `auto` : 'unset');
    }

    if (open) {
      modalRef?.current?.classList.remove('hide');
      if (document && document.body) {
        document.body.style.overflow = 'hidden';
      }
    } else if (!open) {
      if (document && document.body) {
        document.body.style.overflow = 'auto';
      }
      const speed = style.getPropertyValue('--modal-transition-speed') || '2000';
      const s = Number(speed.replace(/\D/g, '')) * 1.5;
      setTimeout(() => modalRef?.current?.classList.add('hide'), s);
    }
  }, [open, children, height]);

  return (
    <>
      <div data-testid="modal-overlay" className={cx(styles.overlay, open ? styles.open : styles.close)}>
        {overlayElement}
      </div>
      <div
        data-testid="modal"
        ref={modalRef}
        className={cx(styles.modal, open ? styles.open : styles.close, className)}
      >
        <div ref={headerRef} className={styles.header}>
          {title}
          <Button
            icon={closeIcon}
            buttonType="icon"
            onClick={() => {
              onClickIcon(!open);
            }}
          />
        </div>
        <div data-testid="modal-content" ref={contentRef} className={styles.content}>
          {children}
        </div>
      </div>
    </>
  );
};
