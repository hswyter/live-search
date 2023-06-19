import React, { FunctionComponent } from "react"
import InputField, { InputFieldProps } from "./InputField"
import { useTranslation } from "react-i18next"

type SearchInputFieldProps = Omit<InputFieldProps, 'type' | 'leftElement'>

const SearchInputField: FunctionComponent<SearchInputFieldProps> = ({ placeholder, ...otherProps }: SearchInputFieldProps) => {
  const { t } = useTranslation();

  const searchIcon = <img src="/icons/search.svg" alt="" className="w-4" />;

  return (
    <InputField type="search" placeholder={placeholder ?? t('search')} leftElement={searchIcon} {...otherProps} />
  )
}

export default SearchInputField;