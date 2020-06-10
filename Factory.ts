enum TEACHER_TYPE {
  CODING = 'coding',
  MUSIC = 'music'
}

interface TeacherProperties {
  name: string;
}
interface CodingTeacherProperties {
  name: string;
  programmingLanguage: string;
}
interface MusicTeacherProperties {
  name: string;
  instrument: string;
}

class Teacher {
  public name: string;
  constructor(properties: TeacherProperties) {
    this.name = properties.name;
  }
}
class CodingTeacher extends Teacher {
  public programmingLanguage: string;
  constructor(properties: CodingTeacherProperties) {
    super(properties);
    this.programmingLanguage = properties.programmingLanguage;
  }
}
class MusicTeacher extends Teacher {
  public instrument: string;
  constructor(properties: MusicTeacherProperties) {
    super(properties);
    this.instrument = properties.instrument;
  }
}

class TeacherFactory {
  public static getTeacher(type: TEACHER_TYPE.MUSIC, properties: MusicTeacherProperties): MusicTeacher;
  public static getTeacher(type: TEACHER_TYPE.CODING, properties: CodingTeacherProperties): CodingTeacher;
  public static getTeacher(type: TEACHER_TYPE, properties: MusicTeacherProperties & CodingTeacherProperties) {
    switch (type) {
      case TEACHER_TYPE.CODING:
        return new CodingTeacher(properties);
      case TEACHER_TYPE.MUSIC:
        return new MusicTeacher(properties);
      default:
        throw new Error('Wrong teacher type chosen');
    }
  }
}

const codingTeacher = TeacherFactory.getTeacher(TEACHER_TYPE.CODING, {
  programmingLanguage: 'Javascript',
  name: 'John'
});

console.log(codingTeacher);
