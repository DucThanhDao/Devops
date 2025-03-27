import lodashGet from 'lodash/get';
export function slugify(string: string) {
  return String(string)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
}
export function swap(array: any[], index1: number, index2: number) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

export function prioritizeCompanies(data: any[], priorityCompanies: string[]): any[] {
  const priorityData = data.filter((item) =>
    priorityCompanies.includes(lodashGet(item, 'attributes.nameCompany'))
  );
  const orderData = data.filter(
    (item) => !priorityCompanies.includes(lodashGet(item, 'attributes.nameCompany'))
  );

  priorityData.sort((a, b) => {
    const nameA = lodashGet(a, 'attributes.nameCompany');
    const nameB = lodashGet(b, 'attributes.nameCompany');
    return priorityCompanies.indexOf(nameA) - priorityCompanies.indexOf(nameB);
  });
  return [...priorityData, ...orderData];
}

export function sortProjectsByPriority(projects: any, priorityArray: string[]): any {
  return projects.sort((a: any, b: any) => {
    const aIndex = priorityArray.indexOf(a.name);
    const bIndex = priorityArray.indexOf(b.name);

    if (aIndex === -1 && bIndex === -1) {
      return 0;
    } else if (aIndex === -1) {
      return 1;
    } else if (bIndex === -1) {
      return -1;
    } else {
      return aIndex - bIndex;
    }
  });
}

export function formatName(locale: string, fullName: string): string {
  if (locale === 'vi') {
    const nameParts = fullName.trim().split(/\s+/);
    if (nameParts.length > 2) {
      const givenName = nameParts.pop()!;
      const familyName = nameParts[0];
      return `${givenName} ${familyName}`;
    } else {
      return fullName;
    }
  }
  return fullName;
}

// ONLY HANDLE CASE title with 1 word (CEO, HR) not (Software Engineer)
// FORMAT hao-tang to Hao Tang
export const capitalizeFirstLetter = (string: string) => {
  return String(string).charAt(0).toUpperCase() + String(string).slice(1);
};

// FORMAT hao-tang-ceo to Hao Tang, CEO
export const formatSlugToNameTitle = (slug: string) => {
  const parts = slug.split('-');
  const firstName = parts[0];
  const lastName = parts[1];
  const partTitles = parts.slice(2);
  const title = partTitles.map(capitalizeFirstLetter).join(' ');

  return {
    name: capitalizeFirstLetter(firstName) + ' ' + capitalizeFirstLetter(lastName),
    title: title,
  };
};

// FORMAT Hao Tang, CEO to hao-tang-ceo
export const formatNameTitleToSlug = (name: string, title: string) => {
  const [firstName, lastName] = name.split(' ');
  const titleWords = title.split(' ');
  const titleSlug = titleWords.join('-').toLowerCase();

  return `${firstName.toLowerCase()}-${lastName.toLowerCase()}-${titleSlug}`;
};

export function getPublicUrl(path: string) {
  if (!process.env.NEXT_PUBLIC_CDN_URL) {
    return path;
  }
  return process.env.NEXT_PUBLIC_CDN_URL + "/public" + path;
}