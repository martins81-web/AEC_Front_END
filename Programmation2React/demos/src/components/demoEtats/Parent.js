// import React from 'react';
// import { Child } from './Child';
// import { Ami } from './Ami';

// export class Parent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { name: 'Patate' };

//     this.changeName = this.changeName.bind(this);
//   }

//   changeName(newName) {
//     this.setState({
//       name: newName
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Child onChange={this.changeName} />
//         <Ami name={this.state.name} />
//       </div>
//     );
//   }
// }


import React from 'react'

export class Parent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false
    }

    this.toggleLoading = this.toggleLoading.bind(this)
  }

  toggleLoading = () => {
    console.log('before setState', this.state.loading)

    this.setState({
      loading: !this.state.loading
    },() => console.log('after setState', this.state.loading))

    
  }

  render() {

    return(

      <div>
        <div onClick={this.toggleLoading}>Loading...</div>
      </div>

    )
  }

}