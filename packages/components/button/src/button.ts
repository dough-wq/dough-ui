import type { ExtractPropTypes } from 'vue';

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'danger',
  'info',
  'warning',
  ''
] as const;

export const buttonSzie = ['', 'default', 'large', 'middle', 'small'] as const;

export const buttonProps = {
  type: {
    type: String,
    value: buttonTypes,
    default: '',
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
      return (['default', 'large', 'medium', 'small'] as const).includes(value);
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  }
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
