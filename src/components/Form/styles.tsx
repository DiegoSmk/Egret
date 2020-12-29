import styled from 'styled-components'

export const LabelEgret = styled.label`
  width: 100%;
  margin-bottom: 16px;
  padding: 8px;

  [placeholder] {
    color: #555;
  }

  i {
    margin: 0 10px 0 0;
  }
`

export const FieldEgret = styled.div`
  // input, text-area
  width: 100%;
  margin-bottom: 16px;

  span {
    width: 100%;
    color: #cc0033;
    display: inline-block;
    font-size: 12px;
    background-color: #fce4e4;
    border: 1px solid #fcc2c3;
    padding: 2px 2px;
    box-shadow: 0 8px 6px -6px #cc0033;
  }
  /* input:focus:invalid {
    box-shadow: 0 8px 6px -6px #fce4e4;
    border-bottom: 1px solid #cc0033;
  } */
`

export const FormGroup = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

  label,
  input,
  textarea {
    padding: 8px;
  }

  input,
  textarea {
    background: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 4px;
    box-shadow: 0 8px 6px -6px #555;
    margin: 0 0 15px;
  }
  input:focus,
  textarea:focus {
    background: white;
    box-shadow: none;
  }

  textarea {
    resize: none;
  }
  textarea::-webkit-scrollbar {
    width: 0;
  }

  /* input {
    font-family: 'Roboto', sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  } */
  button {
    width: 80%;
    text-transform: uppercase;
    font-size: 14px;
    background: #2f4ad0;
    margin: 16px 0 50px 0;
    padding: 8px 16px;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 8px 6px -6px #555;
    transition: all 0.5s ease;
  }

  button:hover {
    background: #333333;
    width: 90%;
    box-shadow: 0 8px 6px -6px #2f4ad0;
  }

  button:active,
  button:focus {
    letter-spacing: 2px;
    box-shadow: none;
    width: 100%;
  }

  .mensagem {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }

  .mensagem a {
    color: #333333;
    text-decoration: none;
  }
`
