import clsx from "clsx"

const Button = (props) => {
  const { className, ...otherProps } = props

  return (
    <button
      className={clsx("text-white rounded-lg font-semibold", className)}
      {...otherProps}
    />
  )
}

export default Button
