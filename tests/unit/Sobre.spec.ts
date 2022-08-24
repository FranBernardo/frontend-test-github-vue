import { mount } from '@vue/test-utils';
import Sobre from '@/views/SobreView.vue'

describe('SobreView.vue', () => {
    it('Sobre é um instancia vue', () => {
        const wrapper = mount(Sobre)
        expect(wrapper.vm)

    })
})