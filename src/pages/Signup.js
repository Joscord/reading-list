import { useState } from 'react'
// Importamos nuestro custom hook para el registro
import { useSignup } from '../hooks/useSignup';

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Destructuramos el error y la función de registro de nuestro custom hook. Nótese que el custom hook no recibe parámetros, es la función signup la que los recibe
  const { signup, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault()
    // registramos al usuario con la función de signup
    signup(email, password);
  }
  
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>sign up</button>
      </form>
    </div>
  )
}
