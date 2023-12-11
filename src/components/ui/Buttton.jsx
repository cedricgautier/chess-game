import clsx from "clsx"

const sizes = {
  sm: "h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800",
  md: "h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800",
  lg: "h-12 px-6 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
}
const Button = (props) => {
  const { className, size, ...otherProps } = props

  return (
    <button
      className={clsx(
        "text-white rounded-lg font-semibold bg-blue-600 active:bg-blue-700",
        className,
        sizes[size]
      )}
      {...otherProps}
    />
  )
}

export default Button
