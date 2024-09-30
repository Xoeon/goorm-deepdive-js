import chroma from 'chroma-js'
import Select from 'react-select'

export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
]

const colourStyles = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'white',
    width: '200px',
    boxShadow: 'none',
    borderColor: state.isFocused ? '#ccc' : styles.borderColor,
    '&:hover': {
      borderColor: '#ccc',
    },
    cursor: 'pointer',
    fontSize: '14px',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'pointer',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    }
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
    fontSize: '14px',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  indicatorSeparator: (styles) => ({
    display: 'none',
  }),
  clearIndicator: (styles) => ({
    display: 'none',
  }),
}

const TagDropdown = ({ selectedOptions, handleTagChange }) => {
  return (
    <Select
      value={selectedOptions}
      onChange={handleTagChange}
      isMulti
      options={colourOptions}
      menuPlacement='auto'
      styles={colourStyles}
      placeholder='Tag'
    />
  )
}

export default TagDropdown
