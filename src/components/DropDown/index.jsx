import { ContainerDown, ContainerLabel, InvisibleContainer } from "./styles";

function DropDown({ types, label, defaultValue, name, register, error }) {
  return (
    <>
      <ContainerLabel>
        {label}
        {error && <p>{error}</p>}
      </ContainerLabel>
      <InvisibleContainer>
        <select name={name} onChange={() => {}} {...register(name)}>
          <option value="">{defaultValue}</option>
          {types &&
            types.map((type, index) => (
              <ContainerDown key={index} value={type}>
                {type}
              </ContainerDown>
            ))}
        </select>
      </InvisibleContainer>
    </>
  );
}
export default DropDown;
