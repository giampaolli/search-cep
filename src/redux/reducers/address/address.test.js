import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import address, { INITIAL_STATE } from './index';
import { SUCCESS } from './actions';

it('Address should be a function', () => {
    expect(address).to.be.a('function')
});

it('Should action UPDATE_ADDRESS update address', () => {
   const before = deepFreeze({
       address: '',
       district: '',
       city: '',
       state: '',
       code: '',
       status: 1,
   });

   const action = deepFreeze({
       type: SUCCESS,
       payload: {
           address: 'Rua Anna Rosa de Almeida Neves (Residencial São José)',
           district: 'João Aranha',
           city: 'Paulínia',
           state: 'SP',
           code: '13145-770',
           status: 1,
       }
   });

    const after = {
        address: 'Rua Anna Rosa de Almeida Neves (Residencial São José)',
        district: 'João Aranha',
        city: 'Paulínia',
        state: 'SP',
        code: '13145-770',
        status: 1,
    };

    expect(address(before, action)).to.be.deep.equal(after)
});

it('Should return the latest state when action is unknown', () => {
    const before = deepFreeze({
        address: '',
        district: '',
        city: '',
        state: '',
        code: '',
        status: 1,
    });

    const action = deepFreeze({
        type: 'ANYTHING',
        payload: {
            address: 'Rua Anna Rosa de Almeida Neves (Residencial São José)',
            district: 'João Aranha',
            city: 'Paulínia',
            state: 'SP',
            code: '13145-770',
            status: 1,
        }
    });

    const after = {
        address: '',
        district: '',
        city: '',
        state: '',
        code: '',
        status: 1,
    };

    expect(address(before, action)).to.be.deep.equal(after);
});

it('Should return initial state when latest state is undefined', ()=> {
    const before = undefined;
    const action = deepFreeze({});
    const after = INITIAL_STATE;

    expect(address(before, action)).to.be.deep.equal(after);
});


