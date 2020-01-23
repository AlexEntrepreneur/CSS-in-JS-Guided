import React from 'react';
import { Button, Spinner, Input } from 'reactstrap';

export default function Reactstrap() {
  return (
    <div className="reactstap-container" style={{textAlign: 'center'}}>
      <Button>Hello From Reactstrap!</Button>
      <Button color="primary">Hello From Reactstrap!</Button>
      <Spinner type="grow" color="primary" />
      <Spinner color="danger" />
      <Input type="select" name="select" id="exampleSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
      <Spinner size="sm" color="success" style={{ width: '6rem', height: '10rem' }} />
    </div>
  );
}