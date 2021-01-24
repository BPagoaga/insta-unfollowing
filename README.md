# How to

Grab your id, sessionid and query_hash from instagram
Send the first request. In the response, grab "end_cursor" and send it in the subsequent requests in the variables query param `after":"QVFEa2ZJOHVpNjVQTjNnQ2pNaTY0MUxRQ3N2X2h0aVdWdVl1S0JvQUpuNV9ydjJ5Z0I2LUZ1a0dndEdGYlNlV2NVdTFYR1JYWXA1SnVtZ2xkVTBadDJJeA=="`

The whole param should looks like:
```
variables
	{"id":"2944763552","first":100,"after":"QVFEa2ZJOHVpNjVQTjNnQ2pNaTY0MUxRQ3N2X2h0aVdWdVl1S0JvQUpuNV9ydjJ5Z0I2LUZ1a0dndEdGYlNlV2NVdTFYR1JYWXA1SnVtZ2xkVTBadDJJeA=="}
```

# Examples

## Request

curl --request GET \
  --url 'https://www.instagram.com/graphql/query/?query_hash=xxx&variables=%7B%22id%22%3A%xxx%22%2C%22first%22%3A100%7D' \
  --header 'Cookie: ds_user_id=xxx;sessionid=xxx; '

## Response

```
{
  "data": {
    "user": {
      "edge_followed_by": {
        "count": 112,
        "page_info": {
          "has_next_page": true,
          "end_cursor": "QVFCTzhEazNkWEJDTnRXSnNpWXJhOUFZdC1tMkpiQjdJbnZxM3VJMjY3aU05NS0wOFF4djBqckpmejlMdnctOUFNS3hXeHJrMjFXVXp5YmtyVkh0QWJ0Vw=="
        },
        "edges": [
          {
            "node": {
              "id": "xx",
              "username": "xx",
              "full_name": "xx",
              "profile_pic_url": "xx",
              "is_private": false,
              "is_verified": false,
              "followed_by_viewer": true,
              "follows_viewer": true,
              "requested_by_viewer": false,
              "reel": {
                "id": "xx",
                "expiring_at": 1611511753,
                "has_pride_media": false,
                "latest_reel_media": xx,
                "seen": null,
                "owner": {
                  "__typename": "GraphUser",
                  "id": "xx",
                  "profile_pic_url": xx",
                  "username": "xx"
                }
              }
            }
          },
          ...
        ]
      },
      "edge_mutual_followed_by": {
        "count": 0,
        "edges": []
      }
    }
  },
  "status": "ok"
}
```