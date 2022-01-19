import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day, modifiers = {}) {
    if (modifiers.disabled) {
      return;
    }
    this.setState({
      selectedDay: modifiers.selected ? undefined : day,
    });
  }

  calcDisabledDays() {
    var today = new Date();
    var sunday = new Date(today.valueOf());
    var saturday = new Date(today.valueOf());
    var day = today.getDay();
    if(day !== 0) {
        sunday.setHours(-24 * (day));
    }          
    if (day !== 6) {
        saturday.setHours(24*(6-day))
    }
    const disabledDays = {
      before: sunday,
      after: saturday,
    };

    return disabledDays;
  }

  render() {
    return (
      <div>
        <DayPicker
          showOutsideDays
          enableOutsideDaysClick
          selectedDays={this.state.selectedDay}
          disabledDays={this.calcDisabledDays()}
          onDayClick={this.handleDayClick}
        />
        <div>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Please select a day.'}
        </div>
      </div>
    );
  }
}
