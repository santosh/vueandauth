import { shallowMount } from '@vue/test-utils'
import Messages from '@/components/Messages.vue'

describe('Messages.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new message'
    const wrapper = shallowMount(Messages, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
  it('renders the unordered list', () => {
    const wrapper = shallowMount(Messages)
    expect(wrapper.find('ul').exists()).toBeTruthy()
  })
})
