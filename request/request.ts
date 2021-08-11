import { StarIcon, BadgeCheckIcon, ClockIcon, LightBulbIcon } from '@heroicons/react/outline';
import { nowPlayingURL, popularURL, topRatedURL, upcomingURL } from './endpoints';

export default {
    top_rated: {
        title: 'TOP RATED',
        url: topRatedURL,
        Icon: StarIcon
    },

    popular: {
        title: 'POPULAR',
        url: popularURL,
        Icon: BadgeCheckIcon
    },

    upcoming: {
        title: 'UPCOMING',
        url: upcomingURL,
        Icon: ClockIcon
    },

    now_playing: {
        title: 'NOW PLAYING',
        url: nowPlayingURL,
        Icon: LightBulbIcon
    },
}