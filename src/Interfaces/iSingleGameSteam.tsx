export interface iPcRequirements {
  minimum: string;
  recommended: string;
}

export interface iMacRequirements {
  minimum: string;
  recommended: string;
}

export interface LinuxRequirements {
  minimum: string;
  recommended: string;
}

export interface iPriceOverview {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
}

export interface iSub {
  packageid: number;
  percent_savings_text: string;
  percent_savings: number;
  option_text: string;
  option_description: string;
  can_get_free_license: string;
  is_free_license: boolean;
  price_in_cents_with_discount: number;
}

export interface iPackageGroup {
  name: string;
  title: string;
  description: string;
  selection_text: string;
  save_text: string;
  display_type: number;
  is_recurring_subscription: string;
  subs: iSub[];
}

export interface iPlatforms {
  windows: boolean;
  mac: boolean;
  linux: boolean;
}

export interface iMetacritic {
  score: number;
  url: string;
}

export interface iCategory {
  id: number;
  description: string;
}

export interface iGenre {
  id: string;
  description: string;
}

export interface iScreenshot {
  id: number;
  path_thumbnail: string;
  path_full: string;
}

export interface iWebm {
  480: string;
  max: string;
}

export interface iMp4 {
  480: string;
  max: string;
}

export interface iMovie {
  id: number;
  name: string;
  thumbnail: string;
  webm: iWebm;
  mp4: iMp4;
  highlight: boolean;
}

export interface iRecommendations {
  total: number;
}

export interface iHighlighted {
  name: string;
  path: string;
}

export interface iAchievements {
  total: number;
  highlighted: iHighlighted[];
}

export interface iReleaseDate {
  coming_soon: boolean;
  date: string;
}

export interface iSupportInfo {
  url: string;
  email: string;
}

export interface iContentDescriptors {
  ids: any[];
  notes?: any;
}

export interface iSingleGameSteam {
  type: string;
  name: string;
  steam_appid: number;
  required_age: number;
  is_free: boolean;
  controller_support: string;
  dlc: number[];
  detailed_description: string;
  about_the_game: string;
  short_description: string;
  supported_languages: string;
  reviews: string;
  header_image: string;
  website: string;
  pc_requirements: iPcRequirements;
  mac_requirements: iMacRequirements;
  linux_requirements: LinuxRequirements;
  legal_notice: string;
  developers: string[];
  publishers: string[];
  price_overview: iPriceOverview;
  packages: number[];
  package_groups: iPackageGroup[];
  platforms: iPlatforms;
  metacritic: iMetacritic;
  categories: iCategory[];
  genres: iGenre[];
  screenshots: iScreenshot[];
  movies: iMovie[];
  recommendations: iRecommendations;
  achievements: iAchievements;
  release_date: iReleaseDate;
  support_info: iSupportInfo;
  background: string;
  content_descriptors: iContentDescriptors;
}
