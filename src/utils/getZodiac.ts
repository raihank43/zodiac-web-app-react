export default function getZodiac(date: Date) {
  const month = date.getMonth();
  const day = date.getDate();

  if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) {
    return {
      zodiac: "Aries ♈️",
      message: "You are a natural leader and have a strong sense of self.",
    };
  } else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
    return {
      zodiac: "Taurus ♉️",
      message: "You are reliable and patient.",
    };
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
    return {
      zodiac: "Gemini ♊️",
      message: "You are curious and adaptable.",
    };
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) {
    return {
      zodiac: "Cancer ♋️",
      message: "You are intuitive and compassionate.",
    };
  } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
    return {
      zodiac: "Leo ♌️",
      message: "You are confident and generous.",
    };
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return {
      zodiac: "Virgo ♍️",
      message: "You are practical and loyal.",
    };
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return {
      zodiac: "Libra ♎️",
      message: "You are diplomatic and charming.",
    };
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) {
    return {
      zodiac: "Scorpio ♏️",
      message: "You are passionate and resourceful.",
    };
  } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
    return {
      zodiac: "Sagittarius ♐️",
      message: "You are adventurous and optimistic.",
    };
  } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
    return {
      zodiac: "Capricorn ♑️",
      message: "You are disciplined and responsible.",
    };
  } else if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
    return {
      zodiac: "Aquarius ♒️",
      message: "You are independent and humanitarian.",
    };
  } else {
    return {
      zodiac: "Pisces ♓️",
      message: "You are imaginative and compassionate.",
    };
  }
}
