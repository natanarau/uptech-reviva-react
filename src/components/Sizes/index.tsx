import React from 'react'
import { ContainerSize, InputSize, Label, SpanSize } from './styles'

export const SizeProduct = () => {
  const arraySize = ['P', 'M', 'G']
  const [check, setCheck] = React.useState<string>()
  const handleClickButton = (value: string) => {
    setCheck(value);
  }
  return (
    <>
      <ContainerSize>
        {arraySize.map((item, index) => 
          <Label key={index}>
            <InputSize type="radio" name="size" value={item} id={item} onChange={e => handleClickButton(e.target.value)} />
            <SpanSize color={item === check ? '#000000' : '#ffffff'}>{item}</SpanSize>
          </Label>
        )}
      </ContainerSize>
    </>
  )
}