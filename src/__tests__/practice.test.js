import React from 'react'
import ReactDOM from 'react-dom'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <div className={`clicks-${count}`}>
          {count} clicks
        </div>
        <a href="url" onClick={() => { this.setState({ count: count + 1 }); }}>
          Increment
        </a>
      </div>
    );
  }
}

describe('testing the tester', () => {
  let wrapper  

  beforeEach(() => {wrapper = shallow(<Foo />);})
  
  it('does the test', () => {
    const test1 = wrapper.find('.clicks-0')
    console.log(test1)
    expect(test1.length).toEqual(1);
    
    wrapper.find('a').simulate('click');
    expect(wrapper.find('.clicks-1').length).toEqual(1);
  })
})
  
