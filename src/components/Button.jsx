import React from 'react'

const Button = ({ styles, href, onClick, children, type = 'button' }) => {
  const content = children || 'Contactanos!'

  if (href) {
    return (
      <a
        href={href}
        className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] text-center inline-block`}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      {content}
    </button>
  )
}

export default Button
