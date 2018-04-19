export default [
  {
    "url": "https://api.github.com/repos/ming-codes/ming-codes.github.com/issues/1",
    "repository_url": "https://api.github.com/repos/ming-codes/ming-codes.github.com",
    "labels_url": "https://api.github.com/repos/ming-codes/ming-codes.github.com/issues/1/labels{/name}",
    "comments_url": "https://api.github.com/repos/ming-codes/ming-codes.github.com/issues/1/comments",
    "events_url": "https://api.github.com/repos/ming-codes/ming-codes.github.com/issues/1/events",
    "html_url": "https://github.com/ming-codes/ming-codes.github.com/issues/1",
    "id": 315712628,
    "number": 1,
    "title": "Supercookie",
    "user": {
      "login": "ming-codes",
      "id": 706212,
      "avatar_url": "https://avatars1.githubusercontent.com/u/706212?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ming-codes",
      "html_url": "https://github.com/ming-codes",
      "followers_url": "https://api.github.com/users/ming-codes/followers",
      "following_url": "https://api.github.com/users/ming-codes/following{/other_user}",
      "gists_url": "https://api.github.com/users/ming-codes/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ming-codes/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ming-codes/subscriptions",
      "organizations_url": "https://api.github.com/users/ming-codes/orgs",
      "repos_url": "https://api.github.com/users/ming-codes/repos",
      "events_url": "https://api.github.com/users/ming-codes/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ming-codes/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 906739330,
        "url": "https://api.github.com/repos/ming-codes/ming-codes.github.com/labels/published",
        "name": "published",
        "color": "0e8a16",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-04-19T03:12:39Z",
    "updated_at": "2018-04-19T03:25:54Z",
    "closed_at": null,
    "author_association": "OWNER",
    "body": "| slug | published_at            |\r\n|-----|---------------------|\r\n| supercookie | 2011-10-26 |\r\n\r\nI recently read about that the [Congress is asking to investigate what is called \"super cookie\"](http://oregonbusinessreport.com/2011/10/congress-asked-to-investigate-internet-supercookies/).\r\n\r\nAfter reading the article, I realized that the \"supercookie\" they're talking about is actually the [Flash SharedObject](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/net/SharedObject.html). The Flash SharedObject can be used to store information on the user's computer and send it over the network if need to.\r\n\r\nThe article talked about how these \"supercookie\" can be removed through \"[Website Storage Setting](http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html)\". But that is not completely true. These \"supercookie\" are stored as .sol files under your user directory. The only way to truly purge them is to delete these files.\r\n\r\nYou'll find these sol files in the following locations described [here](http://en.wikipedia.org/wiki/Local_Shared_Object#File_locations)."
  }
];
