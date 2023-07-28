import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Icon from '../src/icon.vue';

describe('Icon Test', () => {
  it('should render slot', () => {
    const wrapper = mount(Icon, {
      slots: {
        default: 'Hello World'
      }
    });
    expect(wrapper.text()).toContain('Hello World');
  }),
    it('render the corrent style for color', () => {
      const wrapper = mount(Icon, {
        props: {
          color: '#000000'
        }
      });
      expect(wrapper.props().color).toBe('#000000');
    }),
    it('render the corrent style for size', () => {
      const wrapper = mount(Icon, {
        props: {
          size: 18
        }
      });
      expect(wrapper.props().size).toBe(18);
    });
});
