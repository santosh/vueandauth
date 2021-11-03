import { shallowMount } from '@vue/test-utils'
import Messages from '@/components/Messages.vue'

describe('Messages.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Messages, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
