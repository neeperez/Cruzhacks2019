{
	"manifest_version": 2,
    "name": "SqueakyCleanchromeExtension",
    "version": "1.0",
    "description": "Censors bad words",

    "content_scripts":{
    	"matches":[
    		"<all_urls>"
    	]
    }

    "icons":{
    	"48": "logoIcon48.png",
    	"128": "logoIcon128.png"
    }

    "background": {
      "scripts": ["background.js"],
      "persistent": false
    },
    "manifest_version": 2
  }