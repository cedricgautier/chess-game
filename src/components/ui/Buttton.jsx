import clsx from "clsx"

const Button = (props) => {
  const { className, ...otherProps } = props

  return (
    <button
      className={clsx(
        "text-white rounded-lg font-semibold bg-blue-600 active:bg-blue-700",
        className
      )}
      {...otherProps}
    />
  )
}

export default Button
