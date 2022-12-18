import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { changeCountFact } from '../../redux/factsSlice'

function Form() {
  const [form, setForm] = useState({
    facts: 1,
  });
  const dispatch = useDispatch()

  const handleFormChange = async (event) => {
    let { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }
  
  useEffect(() => {
    dispatch(changeCountFact(form.facts))
  
  }, [form, dispatch])
  

  return (
    <form>
      <input type="number" min='1' max='5' name="facts" value={form.facts} onChange={handleFormChange}/>
    </form>
  );
}

export default Form;