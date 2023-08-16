import Logo from '../imgs/Logo';
import User from '../imgs/iconUser';
import Safe from '../imgs/iconSafe';
import Email from '../imgs/IconEmail'
import Send from '../imgs/IconSend'




const _Props = {
  collection: [
    { component: Logo, name: 'Logo' },
    { component: User, name: 'User' },
    { component: Safe, name: 'Safe' },
    { component: Email, name: 'Email' },
    { component: Send, name: 'Send' },
  ],
  Logo: (collection,_props) => {
    const Icon = collection.component
    const obj = _props; 
    // console.log(obj)
    return <Icon {...obj} />;


    
  },
  render: (_Index,_List ,_props_) => {
    const renderedIcon = _Props.Logo(_Props.collection[_Index],_props_)

    _List == true ? 
        _Props.collection.forEach(element => {
            const componentLines = element.component.toString().split('\n').length;
            const emojis = '🔹'.repeat(componentLines);
            console.log(`Name: ${element.name}\nComponent:\n${element.component}\nLines: ${componentLines}\nEmojis: ${emojis}\n`)
        }): false
        return renderedIcon;
  }
};

export default function SvgComponent({ _Index, _List,props}) {
  return _Props.render(_Index,_List,props);
}
