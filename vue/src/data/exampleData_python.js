const createFullData = () => {
    return {
        "image": "/enJFNMHnedQTYTESGfDkctCp2.jpeg",
        "imageTitle": "图片名称",
        "imageSize": {
            "width": 1000,
            "height": 563
        },
        "icon": ['priority_1'],
        "tag": ["标签1", "标签2"],
        "hyperlink": "http://lxqnsys.com/",
        "hyperlinkTitle": "理想青年实验室",
        "note": "理想青年实验室\n一个有意思的角落",
        // 自定义位置
        // "customLeft": 1318,
        // "customTop": 374.5
    };
}

/**
 * @Author: 王林
 * @Date: 2021-04-15 22:23:24
 * @Desc: 节点较多示例数据
 */
const data1 = {
    "root": {
        "data": {
            "text": "根节点"
        },
        "children": [
            {
                "data": {
                    "text": "二级节点1",
                    "expand": true,
                },
                "children": [{
                    "data": {
                        "text": "分支主题",
                        ...createFullData()
                    },
                    "children": [{
                        "data": {
                            "text": "分支主题",
                        },
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                        "children": [{
                            "data": {
                                "text": "分支主题",
                                ...createFullData()
                            },
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                            "children": [{
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                                "children": [{
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                    "children": [{
                                        "data": {
                                            "text": "分支主题",
                                        },
                                    }, {
                                        "data": {
                                            "text": "分支主题",
                                        },
                                        "children": [{
                                            "data": {
                                                "text": "分支主题",
                                            },
                                        }, {
                                            "data": {
                                                "text": "分支主题",
                                            },
                                        }, {
                                            "data": {
                                                "text": "分支主题",
                                            },
                                        }, {
                                            "data": {
                                                "text": "分支主题",
                                            },
                                        }]
                                    }, {
                                        "data": {
                                            "text": "分支主题",
                                        },
                                    }, {
                                        "data": {
                                            "text": "分支主题",
                                        },
                                    }]
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }]
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }]
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                        }]
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                    }]
                }]
            },
            {
                "data": {
                    "text": "二级节点2",
                    "expand": true,
                },
                "children": [{
                    "data": {
                        "text": "分支主题",
                    },
                }, {
                    "data": {
                        "text": "分支主题",
                    },
                    "children": [{
                        "data": {
                            "text": "分支主题",
                        },
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                    }]
                }, {
                    "data": {
                        "text": "分支主题",
                    },
                }, {
                    "data": {
                        "text": "分支主题",
                    },
                }]
            },
            {
                "data": {
                    "text": "二级节点3",
                    "expand": true,
                },
                "children": [{
                    "data": {
                        "text": "分支主题",
                    },
                    "children": [{
                        "data": {
                            "text": "分支主题",
                        },
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                        "children": [{
                            "data": {
                                "text": "分支主题",
                            },
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                        }]
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                    }]
                }]
            },
            {
                "data": {
                    "text": "二级节点4",
                    "expand": true,
                },
                "children": [{
                    "data": {
                        "text": "分支主题",
                    },
                    "children": [{
                        "data": {
                            "text": "分支主题",
                        },
                        "children": [{
                            "data": {
                                "text": "分支主题",
                            },
                            "children": [{
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }]
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                        }]
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                        "children": [{
                            "data": {
                                "text": "分支主题",
                            },
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                            "children": [{
                                "data": {
                                    "text": "分支主题",
                                },
                                "children": [{
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }]
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                                "children": [{
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                    "children": [{
                                        "data": {
                                            "text": "分支主题",
                                        },
                                    }, {
                                        "data": {
                                            "text": "分支主题",
                                        },
                                    }, {
                                        "data": {
                                            "text": "分支主题",
                                        },
                                    }, {
                                        "data": {
                                            "text": "分支主题",
                                        },
                                    }]
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }]
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }]
                        }]
                    }, {
                        "data": {
                            "text": "分支主题",
                        },
                        "children": [{
                            "data": {
                                "text": "分支主题",
                            },
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                            "children": [{
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                                "children": [{
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }, {
                                    "data": {
                                        "text": "分支主题",
                                    },
                                }]
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }]
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                            "children": [{
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }]
                        }, {
                            "data": {
                                "text": "分支主题",
                            },
                            "children": [{
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }, {
                                "data": {
                                    "text": "分支主题",
                                },
                            }]
                        }]
                    }]
                }]
            },
        ]
    }
}

/**
 * javascript comment
 * @Author: 王林25
 * @Date: 2021-07-12 13:49:43
 * @Desc: 真实场景数据
 */
const data2 = {
    "root": {
        "data": {
            "text": "一周安排"
        },
        "children": [
            {
                "data": {
                    "text": "生活"
                },
                "children": [
                    {
                        "data": {
                            "text": "锻炼"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "晨跑"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "7:00-8:00"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "夜跑"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "20:00-21:00"
                                        },
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "饮食"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "早餐"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "8:30"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "午餐"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "11:30"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "晚餐"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "19:00"
                                        },
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "休息"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "午休"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "12:30-13:00"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "晚休"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "23:00-6:30"
                                        },
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "text": "工作日\n周一至周五"
                },
                "children": [
                    {
                        "data": {
                            "text": "日常工作"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "9:00-18:00"
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "工作总结"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "21:00-22:00"
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "text": "学习"
                },
                "children": [
                    {
                        "data": {
                            "text": "工作日"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "早间新闻"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "8:00-8:30"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "阅读"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "21:00-23:00"
                                        },
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "休息日"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "财务管理"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "9:00-10:30"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "职场技能"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "14:00-15:30"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "其他书籍"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "16:00-18:00"
                                        },
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "text": "休闲娱乐"
                },
                "children": [
                    {
                        "data": {
                            "text": "看电影"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "1~2部"
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "逛街"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "1~2次"
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

/**
 * javascript comment
 * @Author: 王林25
 * @Date: 2021-07-12 14:29:10
 * @Desc: 极简数据
 */
const data3 = {
    "root": {
        "data": {
            "text": "根节点"
        },
        "children": [
            {
                "data": {
                    "text": "二级节点"
                },
                "children": [
                    {
                        "data": {
                            "text": "分支主题"
                        },
                        "children": []
                    },
                    {
                        "data": {
                            "text": "分支主题"
                        },
                        "children": []
                    }
                ]
            }
        ]
    }
}

const data4 = {
    "root": {
        "data": {
            "text": "根节点"
        },
        "children": [
            {
                "data": {
                    "text": "二级节点1"
                },
                "children": [
                    {
                        "data": {
                            "text": "子节点1-1"
                        },
                        "children": []
                    },
                    {
                        "data": {
                            "text": "子节点1-2"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "子节点1-2-1"
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "子节点1-2-2"
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "子节点1-2-3"
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "text": "二级节点2"
                },
                "children": [
                    {
                        "data": {
                            "text": "子节点2-1"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "子节点2-1-1"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "子节点2-1-1-1"
                                        },
                                        "children": []
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "子节点2-2"
                        },
                        "children": []
                    }
                ]
            }
        ]
    }
}

// 带概要
const data5 = {
    "root": {
        "data": {
            "text": "根节点"
        },
        "children": [
            {
                "data": {
                    "text": "二级节点",
                    "generalization": {
                        "text": "概要",
                    }
                },
                "children": [
                    {
                        "data": {
                            "text": "分支主题"
                        },
                        "children": []
                    },
                    {
                        "data": {
                            "text": "分支主题"
                        },
                        "children": []
                    }
                ]
            },
        ]
    }
}

const rootData = {
    "root": {
        "data": {
            "text": "根节点"
        },
        "children": []
    }
}

// testID均从1开始
// "ableToClick": true,
//  "testID":

const python_tree1 = {
    "root": {
        "data": {
            "text": "Ch 1 python language",
            "expand": true
        },
        "children": [
            {
                "data": {
                    "text": "what is computer?"
                },
                "children": [
                    {
                        "data": {
                            "text": "hardware",
                            "isExplainNode": false,
                            "ableToClick": true,
                            "testID": 1,
                        },
                        "children": []
                    },
                    {
                        "data": {
                            "text": "four functions",
                            "ableToClick": true,
                            "testID": 2,
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "caculation",
                                    "isExplainNode": true
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "data storage",
                                    "isExplainNode": true
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "data movement",
                                    "isExplainNode": true
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "control",
                                    "isExplainNode": true
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "text": "what is program"
                },
                "children": [
                    {
                        "data": {
                            "text": "recipe",
                            "isExplainNode": false,
                            "ableToClick": true,
                            "testID": 3,
                        },
                        "children": []
                    }
                ]
            },
            {
                "data": {
                    "text": "what is python language"
                },
                "children": [
                    {
                        "data": {
                            "text": "aspects of language",
                            "isExplainNode": false,
                            "ableToClick": true,
                            "testID": 4,
                        },
                        "children": []
                    }
                ]
            },
            {
                "data": {
                    "text": "my first python program"
                },
                "children": [
                    {
                        "data": {
                            "text": "python program compiler",
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "IDE tools",
                                    "isExplainNode": false,
                                    "expand": false,
                                    "ableToClick": true,
                                    "testID": 5,
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "programming mode",
                                    "isExplainNode": false,
                                    "expand": false,
                                    "ableToClick": true,
                                    "testID": 6,
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "design a python program",
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "fundamentals",
                                    "expand": false,
                                    "ableToClick": true,
                                    "testID": 7,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "Indentation",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "dynamic",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "typing",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "comment",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "python operators",
                                    "expand": false,
                                    "ableToClick": true,
                                    "testID": 8,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "Arithmetic operators",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Assignment operators",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Comparison operators",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Logical operators",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Identity operators",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Membership  operators",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Bitwise operators",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "input",
                                    "isExplainNode": true
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "output",
                                    "isExplainNode": true
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const python_tree2 = {
    "root": {
        "data": {
            "text": "Ch 2"
        },
        "children": [
            {
                "data": {
                    "text": "Statement",
                    "ableToClick": true,
                    "testID": 1,
                    "pdfID": 1
                },
                "children": [
                    {
                        "data": {
                            "text": "statement in a line or several lines",
                            "isExplainNode": true
                        },
                        "children": []
                    }
                ]
            },
            {
                "data": {
                    "text": "Expression",
                    "ableToClick": true,
                    "testID": 2,
                    "pdfID": 1
                },
                "children": [
                    {
                        "data": {
                            "text": "<object> <operator> <object>",
                            "isExplainNode": true
                        },
                        "children": []
                    }
                ]
            },
            {
                "data": {
                    "text": "Variables"
                },
                "children": [
                    {
                        "data": {
                            "text": "why use variable",
                            "isExplainNode": true
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "reuse",
                                    "isExplainNode": true
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "easier for coding",
                                    "isExplainNode": true
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "what is variable",
                            "isExplainNode": true
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "container for storing data value",
                                    "isExplainNode": true
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "Name rules",
                            "ableToClick": true,
                            "testID": 3,
                            "pdfID": 2
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "Start with",
                                    "isExplainNode": true
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "letter",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "underscore",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "Component",
                                    "isExplainNode": true
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "number",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "letter",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "underscore",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "Non-preserved word",
                                    "isExplainNode": true
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "Assigning value",
                            "ableToClick": true,
                            "testID": 4,
                            "pdfID": 2
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "Single",
                                    "isExplainNode": true
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "<variable> <equal> <value>",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "Multiple",
                                    "isExplainNode": true
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "<x, y, z> <equal> <v1, v2, v3>",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "Combine",
                                    "isExplainNode": true
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "<text> + <string variable>",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "text": "Data Type"
                },
                "children": [
                    {
                        "data": {
                            "text": "Text Type"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "string"
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "Numeric Type"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "int"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "definition",
                                            "ableToClick": true,
                                            "testID": 5,
                                            "pdfID": 3
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "x=1",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "convert",
                                            "ableToClick": true,
                                            "testID": 6,
                                            "pdfID": 3
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "convert float to int: int(2.8)->2",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "convert string to int: int('3')->3",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "float"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "definition",
                                            "ableToClick": true,
                                            "testID": 7,
                                            "pdfID": 3
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "y=2.8",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "convert",
                                            "ableToClick": true,
                                            "testID": 8,
                                            "pdfID": 3
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "convert int to float: float(1)->1.0",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "convert string to float: float('3')->3.0",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "complex"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "definition",
                                            "ableToClick": true,
                                            "testID": 9,
                                            "pdfID": 3
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "z=2+3j",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "convert",
                                            "ableToClick": true,
                                            "testID": 10,
                                            "pdfID": 3
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "convert int to complex: complex(1)->(1+0j)",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "convert float to complex: complex(2.8)->(2.8+0j)",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "convert string to complex: complex('3')->(3+0j)",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "Boolean Type",
                            "ableToClick": true,
                            "testID": 11,
                            "pdfID": 4
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "true",
                                    "isExplainNode": true
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "non-zero numerical number: bool(3)->True, bool(-3)->True",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "false",
                                    "isExplainNode": true
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "bool(0)->False",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "Sequence Type"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "string"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "attribute",
                                            "ableToClick": true,
                                            "testID": 12,
                                            "pdfID": 5
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "immutable",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "create",
                                            "ableToClick": true,
                                            "testID": 13,
                                            "pdfID": 5
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "one line: single or double quotes",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "multi-line: triple quotes",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "access",
                                            "ableToClick": true,
                                            "testID": 14,
                                            "pdfID": 5
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "access element: s[index]",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "get length: len(s)",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "operate"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "convert",
                                                    "ableToClick": true,
                                                    "testID": 15,
                                                    "pdfID": 5
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "convert int to string: str(1)->'1'",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "convert float to string: str(2.8)->'2.8'",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "convert complex to string: str(2+3j)->'(2+3j)'",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "concatenate",
                                                    "ableToClick": true,
                                                    "testID": 16,
                                                    "pdfID": 5
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "s1+s2",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "multiply",
                                                    "ableToClick": true,
                                                    "testID": 17,
                                                    "pdfID": 5
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "s1*<int>",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "print",
                                                    "ableToClick": true,
                                                    "testID": 18,
                                                    "pdfID": 5
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "escape sequence: '\n', '\r', '\t'",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "ignore escape operation: r<str>",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "unicode string: u<str>",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "slicing",
                                                    "ableToClick": true,
                                                    "testID": 19,
                                                    "pdfID": 5
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "s[start:end:step]",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "built-in methods",
                                                    "ableToClick": true,
                                                    "testID": 20,
                                                    "pdfID": 5
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "replace, lower, upper...",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "list"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "attribute",
                                            "ableToClick": true,
                                            "testID": 21,
                                            "pdfID": 6
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "mutable",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "create",
                                            "ableToClick": true,
                                            "testID": 22,
                                            "pdfID": 6
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "use []",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "use list constructor: list()",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "use assignment",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "access",
                                            "ableToClick": true,
                                            "testID": 23,
                                            "pdfID": 6
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "access element: mylist[index]",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "get length: len(mylist)",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "get index: mylist.index(item)",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "operate"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "slicing",
                                                    "ableToClick": true,
                                                    "testID": 24,
                                                    "pdfID": 6
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "mylist[strat:end:step]",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "insert",
                                                    "ableToClick": true,
                                                    "testID": 25,
                                                    "pdfID": 6
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "mylist.append(item)",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "mylist1.extend(mylist2)",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "mylist.insert(pos, item)",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "remove",
                                                    "ableToClick": true,
                                                    "testID": 26,
                                                    "pdfID": 6
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "mylist.remove(item)",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "concatenate",
                                                    "ableToClick": true,
                                                    "testID": 27,
                                                    "pdfID": 6
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "mylist3=mylist1+mylist2",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "convert",
                                                    "ableToClick": true,
                                                    "testID": 28,
                                                    "pdfID": 6
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "convert string to list: list(str)",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "built-in methods",
                                                    "ableToClick": true,
                                                    "testID": 29,
                                                    "pdfID": 6
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "sorted(mylist), mylist.sort(), mylist.reverse()",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "tuple"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "attribute",
                                            "ableToClick": true,
                                            "testID": 30,
                                            "pdfID": 7
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "immutable",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "create",
                                            "ableToClick": true,
                                            "testID": 31,
                                            "pdfID": 7
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "thistuple=(), thistuple=(item1, item2,...)",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "access",
                                            "ableToClick": true,
                                            "testID": 32,
                                            "pdfID": 7
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "thistuple[index]",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "operate"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "slicing",
                                                    "ableToClick": true,
                                                    "testID": 33,
                                                    "pdfID": 7
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "thistuple[start:end:step]",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "application",
                                            "ableToClick": true,
                                            "testID": 34,
                                            "pdfID": 7
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "swap values",
                                                    "isExplainNode": true
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "(x, y)=(y, x)",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "return multiple values",
                                                    "isExplainNode": true
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "return (v1, v2)",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "packing",
                                                    "isExplainNode": true
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "s=(v1, v2, v3)",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "unpacking",
                                                    "isExplainNode": true
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "x, y, z=s",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "set"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "set"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "attribute",
                                                    "ableToClick": true,
                                                    "testID": 35,
                                                    "pdfID": 8
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "mutable, unordered, unindexed, no duplicate elements",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "create",
                                                    "ableToClick": true,
                                                    "testID": 36,
                                                    "pdfID": 8
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "use {}: myset={item1. item2,...}",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "use set constructor: set()",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "operate"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "add",
                                                            "ableToClick": true,
                                                            "testID": 37,
                                                            "pdfID": 8
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "add an element: myset.add(item)",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "remove",
                                                            "ableToClick": true,
                                                            "testID": 38,
                                                            "pdfID": 8
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "remove an element: remove/discard",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "data": {
                                                                    "text": "remove an arbitrary element: myset.pop()",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "data": {
                                                                    "text": "remove all elements: myset.clear()",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "binary operation",
                                                            "ableToClick": true,
                                                            "testID": 39,
                                                            "pdfID": 8
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "union: set |= other set",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "data": {
                                                                    "text": "intersection: set &= other set",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "data": {
                                                                    "text": "difference: set-= other set",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "data": {
                                                                    "text": "symmetric difference: set ^= other set",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "comparison",
                                                            "ableToClick": true,
                                                            "testID": 40,
                                                            "pdfID": 8
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "return a boolean value: set >/</>=/<= other set",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "built-in methods",
                                                            "ableToClick": true,
                                                            "testID": 41,
                                                            "pdfID": 8
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "set1.union(set2), set1.intersection(set2)",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "frozenset"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "attribute",
                                                    "ableToClick": true,
                                                    "testID": 42,
                                                    "pdfID": 8
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "immutable, unordered, unindexed, no duplicate elements",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "create",
                                                    "ableToClick": true,
                                                    "testID": 43,
                                                    "pdfID": 8
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "use frozenset constructor: frozenset()",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "operate"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "comparison",
                                                            "ableToClick": true,
                                                            "testID": 44,
                                                            "pdfID": 8
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "return a boolean value: set >/</>=/<= other set",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "built-in methods",
                                                            "ableToClick": true,
                                                            "testID": 45,
                                                            "pdfID": 8
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "set1.union(set2), set1.intersection(set2)",
                                                                    "isExplainNode": true
                                                                },
                                                                "children": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "Dictionary"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "attribute",
                                            "ableToClick": true,
                                            "testID": 46,
                                            "pdfID": 9
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "mutable, unordered, indexed, unique and immutable key",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "create",
                                            "ableToClick": true,
                                            "testID": 47,
                                            "pdfID": 9
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "use {}",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "use dict constructor: dict()",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "access",
                                            "ableToClick": true,
                                            "testID": 48,
                                            "pdfID": 9
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "mydict[key]",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "operate"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "test if key in dict",
                                                    "ableToClick": true,
                                                    "testID": 49,
                                                    "pdfID": 9
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "return a boolean value: key in mydict",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "add/modify",
                                                    "ableToClick": true,
                                                    "testID": 50,
                                                    "pdfID": 9
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "mydict[key]=value",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "delete",
                                                    "ableToClick": true,
                                                    "testID": 51,
                                                    "pdfID": 9
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "delete one item: del mydict[key]",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "delete whole dict: del mydict/mydict.clear()",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "built-in methods",
                                                    "ableToClick": true,
                                                    "testID": 52,
                                                    "pdfID": 9
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "mydict.keys(), items(), values()",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const python_tree3 = {
    "root": {
        "data": {
            "text": "Ch 3 python basics",
        },
        "children": [
            {
                "data": {
                    "text": "control flow",
                },
                "children": [
                    {
                        "data": {
                            "text": "branch",
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "if",
                                    "ableToClick": true,
                                    "testID": 1,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "condition",
                                            "isExplainNode": true
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "Boolean condition",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "expression",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    }, {
                                        "data": {
                                            "text": "statements",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "if .. else ..",
                                    "ableToClick": true,
                                    "testID": 2,
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "if .. elif .. else ..",
                                    "ableToClick": true,
                                    "testID": 3,
                                },
                                "children": []
                            }, {
                                "data": {
                                    "text": "nested",
                                    "ableToClick": true,
                                    "testID": 4,
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "loop",
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "while",
                                    "ableToClick": true,
                                    "testID": 5,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "condition",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "statements",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "nested",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "for",
                                    "ableToClick": true,
                                    "testID": 6,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "var/sequence",
                                            "isExplainNode": true
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "list",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "tuple",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "range()",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }

                                        ]
                                    }, {
                                        "data": {
                                            "text": "statements",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "nested",
                                            "isExplainNode": true
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "for",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "if .. else ..",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "while",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "control flow tools",
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "break",
                                    "ableToClick": true,
                                    "testID": 7,
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "continue",
                                    "ableToClick": true,
                                    "testID": 8,
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "pass",
                                    "ableToClick": true,
                                    "testID": 9,
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "text": "program design"
                },
                "children": [
                    {
                        "data": {
                            "text": "algorithms",
                            "ableToClick": true,
                            "testID": 10,
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "step 1:flow charts",
                                    "isExplainNode": true
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "step 2:pseudocode",
                                    "isExplainNode": true
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "step 3:program code",
                                    "isExplainNode": true
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const python_tree4 = {
    "root": {
        "data": {
            "text": "Ch 4 python basics"
        },
        "children": [
            {
                "data": {
                    "text": "Structured Program"
                },
                "children": [
                    {
                        "data": {
                            "text": "concept",
                            "isExplainNode":true
                        },
                        "children":[]
                    },
                    {
                        "data": {
                            "text": "function"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "define",
                                    "ableToClick": true,
                                    "testID":1
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": " def / return",
                                            "isExplainNode":true
                                        },
                                        "children": []
                                    },{
                                        "data": {
                                            "text": "function name",
                                            "isExplainNode":true
                                        },
                                        "children": []
                                    },{
                                        "data": {
                                            "text": "args",
                                            "isExplainNode":true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "call"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "interface",
                                            "ableToClick": true,
                                            "testID":2
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "input / return",
                                                    "isExplainNode":true
                                                },
                                                "children":[]
                                            }
                                        ]
                                    },{
                                        "data": {
                                            "text": "function arguments"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "Required argument",
                                                    "ableToClick": true,
                                                    "testID":3
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "direct pass",
                                                            "isExplainNode":true
                                                        },
                                                        "children": []
                                                    },{
                                                        "data": {
                                                            "text": "by reference",
                                                            "isExplainNode":true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },{
                                                "data": {
                                                    "text": "Keyword argument",
                                                    "ableToClick": true,
                                                    "testID":4
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "keyword : value",
                                                            "isExplainNode":true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },{
                                                "data": {
                                                    "text": "Recursion",
                                                    "ableToClick": true,
                                                    "testID":5
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "Variable Scope"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "local scope",
                                            "ableToClick": true,
                                            "testID":6
                                        },
                                        "children": []
                                    },{
                                        "data": {
                                            "text": "global scope",
                                            "ableToClick": true,
                                            "testID":7
                                        },
                                        "children": []
                                    }
                                ]
                            },{
                                "data": {
                                    "text": "lambda",
                                    "ableToClick": true,
                                    "testID":8
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "module"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "define"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "pyfile",
                                            "ableToClick": true,
                                            "testID": 9
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "content",
                                            "ableToClick": true,
                                            "testID": 10
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "function / class / variable",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "runnable code",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            }]
                    }]
            }]
    }
}

export default {
    python_trees: [
        {
            ...python_tree1,
            "theme": {
                "template": "diyColor",
                "config": {
                    // 自定义配置...
                }
            },
            "layout": "logicalStructure",
        },
        {
            ...python_tree2,
            "theme": {
                "template": "diyColor",
                "config": {
                    // 自定义配置...
                }
            },
            "layout": "logicalStructure",
        },
        {
            ...python_tree3,
            "theme": {
                "template": "diyColor",
                "config": {
                    // 自定义配置...
                }
            },
            "layout": "logicalStructure",
        },
        {
            ...python_tree4,
            "theme": {
                "template": "diyColor",
                "config": {
                    // 自定义配置...
                }
            },
            "layout": "logicalStructure",
        }
    ]



    //"layout": "mindMap",
    //"layout": "catalogOrganization"
    // "layout": "organizationStructure"
}
