import HelloWorld from '../src/components/HelloWorld';

export default {
  title: 'Hello World',
	component: HelloWorld,
};

export const SimpleHelloWorld = () => ({
  components: { HelloWorld },
  render(h) {
		return <HelloWorld />;
  },
});
