import MyButton from './MyButton.vue';

interface MyButtonProps {
    size: string;
    variant: string;
}

const argTypes = {
    size: {
        control: { type: 'select', options: ['small', 'regular', 'large'] },
    },
    variant: {
        control: { type: 'select', options: ['primary', 'secondary', 'danger'] },
    }

}

export default {
    title: 'Components/MyButton',
    component: MyButton,
    // argTypes,
};

export const Button = (args) => ({
    components: { MyButton },
    props: ['size', 'variant'],
    template: `<my-button :size="size" :variant="variant" />`,
});

// Button.argTypes = argTypes;