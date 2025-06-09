import React, { useState } from 'react';
import axios from 'axios';

const ProductUploader = () => {
  const [name, setName]                   = useState('');
  const [price, setPrice]                 = useState('');
  const [size, setSize]                   = useState('');
  const [color, setColor]                 = useState('');
  const [rate, setRate]                   = useState('');
  const [numberOfPices, setNumberOfPices] = useState('');
  const [gender, setGender]               = useState('');
  const [image, setImage]                 = useState(null);

  const submitDetails = async (e) => {
    e.preventDefault();

    // 1️⃣ stop if image is missing
    if (!image) return alert('Please choose an image first');

    // 2️⃣ build FormData
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('size', size);
    formData.append('color', color);
    formData.append('rate', rate);
    formData.append('gender', gender);
    formData.append('number_of_pices', numberOfPices);
    formData.append('image', image);              // must match Xano field name

    // (Optional) log to verify everything is there
    // for (const p of formData.entries()) console.log(p[0], p[1]);

    try {
      await axios.post(
        'https://x8ki-letl-twmt.n7.xano.io/api:F7Hzs_kS/products',
        formData                       // ⚠️ no headers – Axios sets them
      );
      alert('Product uploaded successfully!');

      // 3️⃣ reset all fields
      setName('');
      setPrice('');
      setSize('');
      setColor('');
      setRate('');
      setGender('');
      setNumberOfPices('');
      setImage(null);
    } catch (error) {
      console.error(error.response?.data || error);
      alert('Error uploading product');
    }
  };

  return (
    <form onSubmit={submitDetails} className="space-y-3 p-4">
      <input required  value={name}  onChange={e => setName(e.target.value)}  placeholder="Name" />
      <input required  value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" type="number" />
      <input required  value={size}  onChange={e => setSize(e.target.value)}  placeholder="Size" type="number" />
      <input required  value={color} onChange={e => setColor(e.target.value)} placeholder="Color" />
      <input required  value={rate}  onChange={e => setRate(e.target.value)}  placeholder="Rate"  type="number" />
      <select required value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">--Gender--</option>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </select>
      <input
        required
        value={numberOfPices}
        onChange={e => setNumberOfPices(e.target.value)}
        placeholder="Number of pieces"
        type="number"
      />
      <input
        required
        type="file"
        accept="image/*"
        onChange={e => setImage(e.target.files[0])}
      />
      <button type="submit">Submit Product</button>
    </form>
  );
};

export default ProductUploader;
