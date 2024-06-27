import React, { useState, useCallback, useRef, FC } from "react";
import { useClickAway } from "react-use";

interface Option {
  value: string;
  text: string;
}

type NiceSelectProps = {
  options: Option[];
  defaultCurrent: number[];
  placeholder: string;
  className?: string;
  onChange: (selectedValues: string[]) => void;
  name: string;
}

const NiceSelect: FC<NiceSelectProps> = ({
  options,
  defaultCurrent,
  placeholder,
  className,
  onChange,
  name,
}) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Option[]>(defaultCurrent.map(index => options[index]));
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  const ref = useRef<HTMLDivElement | null>(null);

  useClickAway(ref, onClose);

  const currentHandler = (item: Option) => {
    setCurrent(prevCurrent => {
      const isSelected = prevCurrent.some(option => option.value === item.value);
      const newSelected = isSelected
        ? prevCurrent.filter(option => option.value !== item.value)
        : [...prevCurrent, item];

      // Invoke the onChange callback with the updated values
      onChange(newSelected.map(option => option.value));

      return newSelected;
    });
  };

  return (
    <div
      className={`nice-select form-select-lg ${className || ""} ${open ? "open" : ""}`}
      role="button"
      tabIndex={0}
      onClick={() => setOpen((prev) => !prev)}
      onKeyDown={(e) => e}
      ref={ref}
    >
      <span className="current" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {current.length > 0 ? current.map(option => option.text).join(', ') : placeholder}
      </span>
      <ul
        className="list"
        role="menubar"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {options?.map((item, i) => (
          <li
            key={i}
            data-value={item.value}
            className={`option ${current.some(option => option.value === item.value) ? "selected focus" : ""
              }`}
            style={{ fontSize: '14px' }}
            role="menuitem"
            onClick={() => currentHandler(item)}
            onKeyDown={(e) => e}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NiceSelect;
