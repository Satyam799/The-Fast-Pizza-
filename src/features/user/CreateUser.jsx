import { useState } from 'react';
import Button from '../../UI/Button';
import { useDispatch } from 'react-redux';
import {updatename} from '../user/userSlice'
import { useNavigate } from 'react-router-dom';
function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch =useDispatch()
  const navigate=useNavigate()
function handleSubmit(e) {
e.preventDefault();
if(!username)return 
dispatch(updatename(username))
navigate('/menu')
  }


  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
      className='text-center input w-85 mb-10'
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type='primary'>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
