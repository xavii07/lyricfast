import React from "react";
import { DivInputIcon, DivIcon, Label, InputForm, FontAwesome } from "./styles";

const Input = ({
  tipo,
  name,
  placeholder,
  estado,
  setEstado,
  icono,
  label,
}) => {
  const handleChange = (e) => {
    setEstado({ ...estado, campo: e.target.value });
  };

  return (
    <>
      <DivInputIcon>
        <Label htmlFor={name}>{label}</Label>
        <InputForm
          type={tipo}
          placeholder={placeholder}
          id={name}
          name={name}
          value={estado.campo}
          onChange={handleChange}
          autoComplete="off"
        />
        <DivIcon>
          <FontAwesome icon={icono} />
        </DivIcon>
      </DivInputIcon>
    </>
  );
};

export default Input;
