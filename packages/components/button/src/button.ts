import type { ExtractPropTypes } from 'vue';

export const buttonTypes = ['default', 'primary', 'success', 'danger', 'info', 'warning'] as const;

export const buttonSzie = ['large', 'small'] as const;

export const buttonProps = {
  type: {
    type: String,
    value: buttonTypes,
    default: 'default',
    validator(value) {
      return (['default', 'primary', 'success', 'info', 'danger', 'warning'] as const).includes(
        value
      );
    }
  },
  size: {
    type: String,
    value: buttonSzie,
    default: '',
    validator(value) {
      return (['large', 'small'] as const).includes(value);
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  plain: {
    type: Boolean,
    default: (): boolean => false
  }
} as const;

export const buttonEmits = {
  click: (evt: MouseEvent) => {
    evt instanceof MouseEvent;
  }
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
