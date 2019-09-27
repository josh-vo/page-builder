
import { IComponent, IComponentType } from '../interface'
import { TextBoxComponent } from '../component'

export const Components: IComponent[] = [
  {
    children: [],
    name: 'Card',
    type: IComponentType.CARD
  },
  {
    children: [],
    name: 'Heading',
    type: IComponentType.HEADING
  },
  {
    children: [],
    name: 'TextBox',
    type: IComponentType.TEXTBOX,
    content: TextBoxComponent.getNode()
  }
]

export const getContentByName = (name: string) => {
  const components = Components.filter(component => component.name === name)
  if(components && components.length > 0){
    return components[0].content
  }
  return null
}
