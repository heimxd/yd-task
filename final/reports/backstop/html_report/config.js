report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../test/backstop/bitmaps_reference/backstop_default_imgname_0_document_0_phone.png",
        "test": "../bitmaps_test/20171106-001018/backstop_default_imgname_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_imgname_0_document_0_phone.png",
        "label": "imgname",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -377,
            "height": -1224
          },
          "misMatchPercentage": "0.08",
          "analysisTime": 85
        },
        "diffImage": "../bitmaps_test/20171106-001018/failed_diff_backstop_default_imgname_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../../test/backstop/bitmaps_reference/backstop_default_imgname_0_document_1_tablet.png",
        "test": "../bitmaps_test/20171106-001018/backstop_default_imgname_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_imgname_0_document_1_tablet.png",
        "label": "imgname",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -544,
            "height": -1096
          },
          "misMatchPercentage": "0.14",
          "analysisTime": 161
        },
        "diffImage": "../bitmaps_test/20171106-001018/failed_diff_backstop_default_imgname_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ]
});