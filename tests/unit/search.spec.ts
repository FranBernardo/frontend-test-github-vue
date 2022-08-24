
import Search from "@/components/Search.vue"
import Texto from "@/components/Texto.vue"
import { mount } from '@vue/test-utils'



describe('Search', () => {
  it('primeiro test', () => {
    const wrapper = mount(Search)
    expect(wrapper.vm).toBeDefined()
  })
}),

  describe('2 test', () => {
    it('variavel vazia', () => {
      const wrapper = mount(Search)
      wrapper.setData({ repositorio: ''.repeat(7) })

    })
  })
describe('search evento', () => {
  it('verificar se o evento esta sendo emitido', () => {
    const wrapper = mount(Search)
    wrapper.find('v-btn').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('buscar')

  })
})
describe('search', () => {
  it('verificar o input existe', () => {
    const wrapper = mount(Search)
    expect(wrapper.get('v-text-field'))

  })
})
describe('search', () => {
  it('verificar o botao de pesquisar o repositorio  existe', () => {
    const wrapper = mount(Search)
    expect(wrapper.get('v-btn'))

  })
})

describe('Texto.vue', () => {
  it('verificar as props', () => {
    const wrapper = mount(Texto, {
      props: {
        texto: 'Busco o repositorio do git'
      }
    })
    expect(wrapper.props('texto')).toBe('Busco o repositorio do git')

  })
})
describe('Texto.vue', () => {
  it('verificar se tem h1', () => {
    const wrapper = mount(Texto)
    expect(wrapper.get('h1'))
  })
})
describe('Texto.vue', () => {
  it('verificar se tem h2', () => {
    const wrapper = mount(Texto)
    expect(wrapper.get('h2'))
  })
})



