import { render, screen } from '@testing-library/react';
import { DutyItem } from './DutyItem';
import { Duty } from '../../api/duty/duty.entity';

const mockDuty: Duty = {
  id: "123",
  name: "sample test"
}

describe('Unit Test - Duty Item', () => {
  test('Render Info', () => {
    const component = <DutyItem duty={mockDuty} onDelete={() => { }} onEdit={async (_) => { }} />
    render(component);

    const text = screen.getByText(mockDuty.name);
    expect(text).toBeTruthy() // can find DOM object
  })

  // interaction test... etc
});