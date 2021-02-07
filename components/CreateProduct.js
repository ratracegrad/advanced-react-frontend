import useForm from '../lib/useForm';

function CreateProduct() {
  const { inputs, handleChange } = useForm({
    name: 'Jennifer',
    price: 1700,
    description: 'These are the best shoes',
  });

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="text"
          placeholder="Price"
          id="price"
          name="price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default CreateProduct;
