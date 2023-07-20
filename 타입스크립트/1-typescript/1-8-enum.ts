{
  /**
   * Enum
   */
  //javascript
  const MAX_NUM = 9;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDENSDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDENSDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //typeScipt => enum에서는 앞에 글자만 대문자
  enum Days {
    Monday,
    Tuesday,
    Wedensday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
}
