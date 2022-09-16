export type OverrideWithOptional<B, D> = Omit<B, keyof D> & { [P in keyof D]?: D[P] };
