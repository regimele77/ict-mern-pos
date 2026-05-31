import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const PIN_LENGTH = 4
const CORRECT_PIN = '1234'

const KeyButton = ({ children, onClick }) => {
  const [active, setActive] = useState(false)

  return (
    <button
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
      onClick={onClick}
      style={{
        width: '100%',
        height: 84,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 26,
        border: '2px solid #d0d7de',
        borderRadius: 12,
        background: active ? '#e9f0ff' : '#ffffff',
        boxShadow: active ? 'inset 0 3px 6px rgba(0,0,0,0.12)' : '0 6px 18px rgba(15, 23, 42, 0.06)',
        transition: 'transform 0.08s ease, background 0.08s',
        transform: active ? 'scale(0.985)' : 'scale(1)',
        userSelect: 'none'
      }}
    >
      {children}
    </button>
  )
}

const Login = () => {
  const [pin, setPin] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (pin.length === PIN_LENGTH) {
      if (pin === CORRECT_PIN) {
        setTimeout(() => navigate('/order'), 150)
      } else {
        setTimeout(() => setPin(''), 300)
      }
    }
  }, [pin, navigate])

  const handleChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, PIN_LENGTH)
    setPin(digits)
  }

  const appendDigit = (d) => {
    setPin((p) => (p + d).slice(0, PIN_LENGTH))
    inputRef.current?.focus()
  }

  const backspace = () => setPin((p) => p.slice(0, -1))
  const clearAll = () => setPin('')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
     

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            width: 380,
            padding: 20,
            boxSizing: 'border-box',
            textAlign: 'center',
            borderRadius: 12,
            background: '#fff',
            boxShadow: '0 20px 40px rgba(2,6,23,0.12)'
          }}
        >
          <h2 style={{ marginBottom: 12 }}>Enter PIN</h2>

          <input
            ref={inputRef}
            value={pin}
            onChange={handleChange}
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="••••"
            type="password"
            style={{
              width: '100%',
              padding: '14px 10px',
              fontSize: 24,
              letterSpacing: 12,
              textAlign: 'center',
              boxSizing: 'border-box',
              border: '1px solid #e6e9ee',
              borderRadius: 10
            }}
          />

          <div
            style={{
              marginTop: 20,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 14
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <KeyButton key={n} onClick={() => appendDigit(String(n))}>
                {n}
              </KeyButton>
            ))}

            <KeyButton onClick={clearAll}>Clear</KeyButton>
            <KeyButton onClick={() => appendDigit('0')}>0</KeyButton>
            <KeyButton onClick={backspace}>⌫</KeyButton>
          </div>

          <div style={{ height: 22, marginTop: 14 }}>
            {pin.length === PIN_LENGTH && pin !== CORRECT_PIN ? (
              <span style={{ color: 'red' }}>Wrong PIN</span>
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login