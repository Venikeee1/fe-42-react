import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
} from 'react';

const PhoneInput = forwardRef((props, ref) => {
  const { onChange, ...restProps } = props;

  const handleChange = (event) => {
    onChange(event.target.value, event);
  };

  return <input ref={ref} {...restProps} onChange={handleChange} type="text" />;
});

export const Example = () => {
  const [text, setText] = useState(''); //3
  const inputRef = useRef();
  const isFirstRenderRef = useRef(true);

  const handleInputChange = (value) => {
    setText(value);
  };

  // componentDidMount
  useLayoutEffect(() => {
    const id = setInterval(() => {
      // console.log('helllo');
    }, 1000);

    // componentWillUnmount
    return () => {
      clearInterval(id);
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    console.log(`text is updated: ${text}`);
  }, [text]);

  return (
    <>
      <h2>Imput text: {text}</h2>
      <PhoneInput ref={inputRef} onChange={handleInputChange} />
    </>
  );
};