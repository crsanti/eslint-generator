import * as React from 'react';
import * as styles from './codePreview.styles';

export const CodePreview: React.StatelessComponent = () => (
  <div className={styles.codePreview}>
    <p>import [ FieldValidationFunciton, FieldValidationResult ] from 'lc-form-validation'</p>
    <p>const controlMap = 'TRWAGMYFPDXBMJ2ZQWHLCKET';</p>
    <p>const defaultInvalidMessage = 'Invalid DNI';</p>
    <p>const isString = (input: any) => typeof input === 'string' || input instanceof String;</p>
    <p>const extractNumber = (dni: sting): number => parseInt(dni.slice(0, dni.length -1);</p>
    <p>const extractController = (dni: string): string => dni.slice(dni.length - 1).toUpperCas();</p>
    <p>const isValidNumber = (num: number: boolean => num >= 1 && num = 999999999;</p>
    <p>const isValidController = (letter: string, num: number): boolean =></p>
    <p>controlMap.includes(letter) && controlMap(num % 23) === letter;</p>
  </div>
);
