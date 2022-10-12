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

const python_ch1 = {
    "root": {
        "data": {
            "text": "Ch 1 python language"

        },
        "children": [
            {
                "data": {
                    "text": "what is computer?",
                    "isExplainNode": true
                },
                "children": [
                    {
                        "data": {
                            "text": "hardware",
                            "isExplainNode": true
                        },
                        "children": []
                    },
                    {
                        "data": {
                            "text": "four function",
                            "isExplainNode": true
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "caculation"
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "data storage"
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "data movement"
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "control"
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
                            "isExplainNode": true
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
                            "isExplainNode": true
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
                            "text": "python program compiler"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "IDE tools",
                                    "isExplainNode": true
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "programming mode",
                                    "isExplainNode": true
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "design a python program"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "fundaments"
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
                                    "text": "python operator"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "Arithmetic operators"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Assignment operators"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Comparison operators"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Logical operators"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Identity operators"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Membership  operators"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "Bitwise operators"
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
}


const python_ch2 = {
    "root": {
        "data": {
            "text": "Ch 2"
        },
        "children": [
            {
                "data": {
                    "text": "Statement"
                },
                "children": [
                    {
                        "data": {
                            "text": "statement in a line or several lines",
                            // "isExplainNode": true
                        },
                        "children": []
                    }
                ]
            },
            {
                "data": {
                    "text": "Expression"
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
                            "text": "why use variable"
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
                            "text": "what is variable"
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
                            "text": "Name rules"
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
                            "text": "Assigning value"
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
                                            "text": "definition"
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
                                            "text": "convert"
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
                                            "text": "definition"
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
                                            "text": "convert"
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
                                            "text": "definition"
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
                                            "text": "convert"
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
                            "text": "Boolean Type"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "true"
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
                                    "text": "false"
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
                                            "text": "attribute"
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
                                            "text": "create"
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
                                            "text": "access"
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
                                                    "text": "convert"
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
                                                    "text": "concatenate"
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
                                                    "text": "multiply"
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
                                                    "text": "print"
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
                                                    "text": "slicing"
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
                                                    "text": "built-in methods"
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
                                            "text": "attribute"
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
                                            "text": "create"
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
                                            "text": "access"
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
                                                    "text": "slicing"
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
                                                    "text": "insert"
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
                                                    "text": "remove"
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
                                                    "text": "concatenate"
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
                                                    "text": "convert"
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
                                                    "text": "built-in methods"
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
                                            "text": "attribute"
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
                                            "text": "create"
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
                                            "text": "access"
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
                                                    "text": "slicing"
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
                                            },
                                            {
                                                "data": {
                                                    "text": "swap values"
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
                                                    "text": "return multiple values"
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
                                                    "text": "packing"
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
                                                    "text": "unpacking"
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
                                                    "text": "attribute"
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
                                                    "text": "create"
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
                                                            "text": "add"
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
                                                            "text": "remove"
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
                                                            "text": "binary operation"
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
                                                            "text": "comparison"
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
                                                            "text": "built-in methods"
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
                                                    "text": "attribute"
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
                                                    "text": "create"
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
                                                            "text": "comparison"
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
                                                            "text": "built-in methods"
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
                                            "text": "attribute"
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
                                            "text": "create"
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
                                            "text": "access"
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
                                                    "text": "test if key in dict"
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
                                                    "text": "update"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "add/modify"
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
                                                            "text": "delete"
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
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "built-in methods"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "mydict.has_key(key), keys(), items(), values()",
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

const python_ch3_wo_booleanConditions = {
    "root": {
        "data": {
            "text": "Ch 3"
        },
        "children": [
            {
                "data": {
                    "text": "python basics"
                },
                "children": [
                    {
                        "data": {
                            "text": "control flow"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "branch"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "if"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "condition"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "Boolean condition"
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "equals: a==b"
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "data": {
                                                                    "text": "not equals: a!=b"
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "data": {
                                                                    "text": "less than: a<b"
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "data": {
                                                                    "text": "less than or equal to: a<=b"
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "data": {
                                                                    "text": "greater than: a>b"
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "data": {
                                                                    "text": "greater than or equal to: a>=b"
                                                                },
                                                                "children": []
                                                            }
                                                        ]
                                                    }, {
                                                        "data": {
                                                            "text": "expression"
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }, {
                                                "data": {
                                                    "text": "statements"
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "if .. else .."
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "if .. elif .. else .."
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "nested"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "loop"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "while"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "condition"
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "statements"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "nested"
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "for .. in .."
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "var/sequence"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "list"
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "tuple"
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "range()"
                                                        },
                                                        "children": []
                                                    }

                                                ]
                                            }, {
                                                "data": {
                                                    "text": "nested"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "for"
                                                        },
                                                        "children": []
                                                    }, {
                                                        "data": {
                                                            "text": "if .. else .."
                                                        },
                                                        "children": []
                                                    }, {
                                                        "data": {
                                                            "text": "while"
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
                                    "text": "control flow tools"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "break"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "continue"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "pass"
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
                                    "text": "algorithms"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "step 1:flow charts"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "step 2:pseudocode"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "step 3:program code"
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
}

const python_ch3 = {
    "root": {
        "data": {
            "text": "Ch 3 python basics"
        },
        "children": [
            {
                "data": {
                    "text": "control flow"
                },
                "children": [
                    {
                        "data": {
                            "text": "branch"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "if"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "condition"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "Boolean condition"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "expression"
                                                },
                                                "children": []
                                            }
                                        ]
                                    }, {
                                        "data": {
                                            "text": "statements"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "if .. else .."
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "if .. elif .. else .."
                                },
                                "children": []
                            }, {
                                "data": {
                                    "text": "nested"
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "loop"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "while"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "condition"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "statements"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "nested"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "for"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "var/sequence"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "list"
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "tuple"
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "range()"
                                                },
                                                "children": []
                                            }

                                        ]
                                    }, {
                                        "data": {
                                            "text": "statements"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "nested"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "for"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "if .. else .."
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "while"
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
                            "text": "control flow tools"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "break"
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "continue"
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "pass"
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
                            "text": "algorithms"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "step 1:flow charts"
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "step 2:pseudocode"
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "step 3:program code"
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

const python_ch4 = {
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
                            "isExplainNode": true
                        },
                        "children": []
                    },
                    {
                        "data": {
                            "text": "function"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "define"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": " def / return"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "function name"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "args"
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
                                            "text": "interface"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "input / return"
                                                },
                                                "children": []
                                            }
                                        ]
                                    }, {
                                        "data": {
                                            "text": "pass data into a function"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "Required argument"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "direct pass"
                                                        },
                                                        "children": []
                                                    }, {
                                                        "data": {
                                                            "text": "by reference"
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }, {
                                                "data": {
                                                    "text": "Keyword argument"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "keyword : value"
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }, {
                                                "data": {
                                                    "text": "Recursion"
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
                                            "text": "local scope"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "global scope"
                                        },
                                        "children": []
                                    }
                                ]
                            }, {
                                "data": {
                                    "text": "lambda"
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
                                            "text": "pyfile"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "content"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "function / class / variable"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "runnable code"
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "import"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "function"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "variable"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "runnable code"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "__main__",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }]
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

const python_ch6 = {
    "root": {
        "data": {
            "text": "Ch 6"
        },
        "children": [
            {
                "data": {
                    "text": "Class"
                },
                "children": [
                    {
                        "data": {
                            "text": "create class"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "class <class name> (<class parent>)",
                                    "isExplainNode": true
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "class attributes"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "kind, etc.(shared by all)",
                                    "isExplainNode": true
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "methods"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "special methods"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "constructor"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "def __init__(self, aug1, aug2,...)",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "print an object"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "def __str__(self)",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "add two objects"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "def __add__(self, other)",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "substract two objects"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "def __sub__(self, other)",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "two equal objects"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "def __eq__(self, other)",
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
                                    "text": "user-defined methods"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "def <func>(self, aug1, aug2,...)",
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
                            "text": "inheritance"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "call methods from parent"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "super().<func>(aug1, aug2,...)",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "add new methods"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "def <newfunc>(self, aug1, aug2,...)",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "override methods from parent"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "def <func_from_parent>(self, aug1, aug2,...)",
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
                    "text": "Object"
                },
                "children": [
                    {
                        "data": {
                            "text": "create instance"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "<obj> = <class name>(aug1, aug2,...)",
                                    "isExplainNode": true
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "instance attributes"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "name, age, color, etc.(unique to instance)",
                                    "isExplainNode": true
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "access attributes"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "getter"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "def get_<attribute>(self)",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "setter"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "def set_<attribute>(self, new_value)",
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
}

const python_tree = {
    "root": {
        "data": {
            "text": "python",
            "ableToClick": true
        },
        "children": [
            {
                "data": {
                    "text": "Ch 1 python language",
                    "expand": false
                },
                "children": [
                    {
                        "data": {
                            "text": "what is computer?",
                            "isExplainNode": true
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "hardware",
                                    "isExplainNode": true
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "four function",
                                    "isExplainNode": true
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "caculation"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "data storage"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "data movement"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "control"
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
                                    "isExplainNode": true
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
                                    "isExplainNode": true
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
                                    "text": "python program compiler"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "IDE tools",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "programming mode",
                                            "isExplainNode": true
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "design a python program"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "fundaments"
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
                                            "text": "python operator"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "Arithmetic operators"
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "Assignment operators"
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "Comparison operators"
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "Logical operators"
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "Identity operators"
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "Membership  operators"
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "Bitwise operators"
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
            }, {
                "data": {
                    "text": "Ch 2"
                },
                "children": [
                    {
                        "data": {
                            "text": "Statement"
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
                            "text": "Expression"
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
                                    "text": "why use variable"
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
                                    "text": "what is variable"
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
                                    "text": "Name rules"
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
                                    "text": "Assigning value"
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
                                                    "text": "definition"
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
                                                    "text": "convert"
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
                                                    "text": "definition"
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
                                                    "text": "convert"
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
                                                    "text": "definition"
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
                                                    "text": "convert"
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
                                    "text": "Boolean Type"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "true"
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
                                            "text": "false"
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
                                                    "text": "attribute"
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
                                                    "text": "create"
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
                                                    "text": "access"
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
                                                            "text": "convert"
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
                                                            "text": "concatenate"
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
                                                            "text": "multiply"
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
                                                            "text": "print"
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
                                                            "text": "slicing"
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
                                                            "text": "built-in methods"
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "replace, lower, upper, islower, isupper, isalpha, isdigit, isalnum, isspace, split, rsplit, strip, rstrip, capitalize, center, count, startswith, endswith",
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
                                                    "text": "attribute"
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
                                                    "text": "create"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "use []: mylist1=[], mylist2=[expression1, sxpression2,...], mylist3=[expression for variable in sequence]",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "use list constructor: mylist1=list(), mylist2=list(sequence), mylist3=list(expression for variable in sequence)",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "use assignment: mylist1=mylist2=[], mylist3=[] mylist4=mylist3",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "access"
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
                                                            "text": "slicing"
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
                                                            "text": "insert"
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
                                                            "text": "remove"
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
                                                            "text": "concatenate"
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
                                                            "text": "convert"
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
                                                            "text": "built-in methods"
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
                                                    "text": "attribute"
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
                                                    "text": "create"
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
                                                    "text": "access"
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
                                                            "text": "slicing"
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
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "swap values"
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
                                                            "text": "return multiple values"
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
                                                            "text": "packing"
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
                                                            "text": "unpacking"
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
                                                            "text": "attribute"
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
                                                            "text": "create"
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
                                                                    "text": "use set constructor: myset=set(), myset2=set(sequence)",
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
                                                                    "text": "add"
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
                                                                    "text": "remove"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "data": {
                                                                            "text": "remove an element: myset.remove(item)/myset.discard(item)",
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
                                                                    "text": "binary operation"
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
                                                                    "text": "comparison"
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
                                                                    "text": "built-in methods"
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
                                                            "text": "attribute"
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
                                                            "text": "create"
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "use frozenset constructor: myset=frozenset(), myset2=frozenset(sequence)",
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
                                                                    "text": "comparison"
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
                                                                    "text": "built-in methods"
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
                                                    "text": "attribute"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "mutable, unordered, indexed, key must be unique and immutable type, value can be any type and duplicates",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "create"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "use {}: mydict1={}, mydict2={key1:value1, key2:value2,...}",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "use dict constructor: mydict1=dict(), mydict2=dict(key1=value1, key2=value2,...), mydict3=dict([(key1, value1), (key2, value2),...])",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "data": {
                                                    "text": "access"
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
                                                            "text": "test if key in dict"
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
                                                            "text": "update"
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "add/modify"
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
                                                                    "text": "delete"
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
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "built-in methods"
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "mydict.has_key(key), mydict.keys(), mydict.items(), mydict.values()",
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
            }, {
                "data": {
                    "text": "Ch 3 python basics"
                },
                "children": [
                    {
                        "data": {
                            "text": "control flow"
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "branch"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "if"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "condition"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "Boolean condition"
                                                        },
                                                        "children": []
                                                    }, {
                                                        "data": {
                                                            "text": "expression"
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }, {
                                                "data": {
                                                    "text": "statements"
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "if .. else .."
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "if .. elif .. else .."
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "nested"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "loop"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "while"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "condition"
                                                },
                                                "children": []
                                            },
                                            {
                                                "data": {
                                                    "text": "statements"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "nested"
                                                },
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "for"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "var/sequence"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "list"
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "tuple"
                                                        },
                                                        "children": []
                                                    },
                                                    {
                                                        "data": {
                                                            "text": "range()"
                                                        },
                                                        "children": []
                                                    }

                                                ]
                                            }, {
                                                "data": {
                                                    "text": "statements"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "nested"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "for"
                                                        },
                                                        "children": []
                                                    }, {
                                                        "data": {
                                                            "text": "if .. else .."
                                                        },
                                                        "children": []
                                                    }, {
                                                        "data": {
                                                            "text": "while"
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
                                    "text": "control flow tools"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "break"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "continue"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "pass"
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
                                    "text": "algorithms"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "step 1:flow charts"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "step 2:pseudocode"
                                        },
                                        "children": []
                                    },
                                    {
                                        "data": {
                                            "text": "step 3:program code"
                                        },
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }, {
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
                                    "isExplainNode": true
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "function"
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "define"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": " def / return"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "function name"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "args"
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
                                                    "text": "interface"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "input / return"
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }, {
                                                "data": {
                                                    "text": "pass data into a function"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "Required argument"
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "direct pass"
                                                                },
                                                                "children": []
                                                            }, {
                                                                "data": {
                                                                    "text": "by reference"
                                                                },
                                                                "children": []
                                                            }
                                                        ]
                                                    }, {
                                                        "data": {
                                                            "text": "Keyword argument"
                                                        },
                                                        "children": [
                                                            {
                                                                "data": {
                                                                    "text": "keyword : value"
                                                                },
                                                                "children": []
                                                            }
                                                        ]
                                                    }, {
                                                        "data": {
                                                            "text": "Recursion"
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
                                                    "text": "local scope"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "global scope"
                                                },
                                                "children": []
                                            }
                                        ]
                                    }, {
                                        "data": {
                                            "text": "lambda"
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
                                                    "text": "pyfile"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "content"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "function / class / variable"
                                                        },
                                                        "children": []
                                                    }, {
                                                        "data": {
                                                            "text": "runnable code"
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "data": {
                                            "text": "import"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "function"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "variable"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "runnable code"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "__main__",
                                                            "isExplainNode": true
                                                        },
                                                        "children": []
                                                    }]
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

// l = {
//     "data": {
//         "text": "expression"
//     },
//     "children": []
// }

const python_tree1 =  {
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
                            "testID": 0,
                        },
                        "children": []
                    },
                    {
                        "data": {
                            "text": "four functions",
                            "ableToClick": true,
                            "testID": 1,
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
                            "testID": 2,
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
                            "testID": 3,
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
                                    "testID": 4,
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "programming mode",
                                    "isExplainNode": false,
                                    "expand": false,
                                    "ableToClick": true,
                                    "testID": 5,
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
                                    "testID": 6,
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
                                    "testID": 7,
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
// "ableToClick": true,
//     "testID":
// "expand": false
const python_tree2 =  {
    "root": {
        "data": {
            "text": "Ch 2",
            "expand": true
        },
        "children": [
            {
                "data": {
                    "text": "Statement",
                    "ableToClick": true,
                    "testID": 0
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
                    "testID": 1
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
                    "text": "Variables",
                    "ableToClick": true,
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
                            "testID": 2
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "Start with",
                                    "isExplainNode": true,
                                    "expand": false,
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
                                    "isExplainNode": true,
                                    "expand": false
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
                            "testID": 3
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "Single",
                                    "isExplainNode": true,
                                    "expand": false,
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
                                    "isExplainNode": true,
                                    "expand": false,
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
                                    "isExplainNode": true,
                                    "expand": false,
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
                            "text": "Numeric Type",
                            "ableToClick": true,
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "int",

                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "definition",
                                            "expand": false,
                                            "ableToClick": true,
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
                                            "expand": false,
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
                                    "text": "float",
                                    "expand": false,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "definition"
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
                                            "text": "convert"
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
                                    "text": "complex",
                                    "expand": false,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "definition"
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
                                            "text": "convert"
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
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "true",
                                    "isExplainNode": true,
                                    "expand": false,
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
                                    "isExplainNode": true,
                                    "expand": false,
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
                                    "text": "string",
                                    "expand": false,
                                    "ableToClick": true,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "attribute"
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
                                            "text": "create"
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
                                            "text": "access"
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
                                                    "text": "convert"
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
                                                    "text": "concatenate"
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
                                                    "text": "multiply"
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
                                                    "text": "print"
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
                                                    "text": "slicing"
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
                                                    "text": "built-in methods"
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
                                    "text": "list",
                                    "expand": false,
                                    "ableToClick": true,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "attribute"
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
                                            "text": "create"
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
                                            "text": "access"
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
                                                    "text": "slicing"
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
                                                    "text": "insert"
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
                                                    "text": "remove"
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
                                                    "text": "concatenate"
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
                                                    "text": "convert"
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
                                                    "text": "built-in methods"
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
                                    "text": "tuple",
                                    "expand": false,
                                    "ableToClick": true,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "attribute"
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
                                            "text": "create"
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
                                            "text": "access"
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
                                                    "text": "slicing"
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
                                            "text": "application"
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
                                    "text": "set",
                                    "expand": false,
                                    "ableToClick": true,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "set"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "attribute"
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
                                                    "text": "create"
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
                                                            "text": "add"
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
                                                            "text": "remove"
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
                                                            "text": "binary operation"
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
                                                            "text": "comparison"
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
                                                            "text": "built-in methods"
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
                                                    "text": "attribute"
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
                                                    "text": "create"
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
                                                            "text": "comparison"
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
                                                            "text": "built-in methods"
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
                                    "text": "Dictionary",
                                    "expand": false,
                                    "ableToClick": true,
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "attribute"
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
                                            "text": "create"
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
                                            "text": "access"
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
                                                    "text": "test if key in dict"
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
                                                    "text": "add/modify"
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
                                                    "text": "delete"
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
                                                    "text": "built-in methods"
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

const python_tree3 ={
    "root": {
        "data": {
            "text": "Ch 3 python basics",
        "expand": true,
            "ableToClick": true,
            "testID": 0,
        },
        "children": [
            {
                "data": {
                    "text": "control flow"
                },
                "children": [
                    {
                        "data": {
                            "text": "branch",
                            "ableToClick": true,
                            "testID": 1,
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "if",
                                    "expand": false
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
                                            },{
                                                "data": {
                                                    "text": "expression",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }
                                        ]
                                    },{
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
                                    "text": "if .. else .."
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "if .. elif .. else .."
                                },
                                "children": []
                            },{
                                "data": {
                                    "text": "nested"
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "loop",
                            "ableToClick": true,
                            "testID": 2,
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "while",
                                    "expand": false
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
                                    },{
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
                                    "expand": false
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
                                    },{
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
                                            },{
                                                "data": {
                                                    "text": "if .. else ..",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            },{
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
                            "ableToClick": true,
                            "testID": 3,
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "break"
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "continue"
                                },
                                "children": []
                            },
                            {
                                "data": {
                                    "text": "pass"
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
                            "testID": 4,
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
            "text": "Ch 4 python basics",
            "expand": true
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
                            "isExplainNode": true
                        },
                        "children": []
                    },
                    {
                        "data": {
                            "text": "function",
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "define",
                                    "expand": false
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": " def / return"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "function name"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "args"
                                        },
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "call",
                                    "expand": false
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "interface"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "input / return"
                                                },
                                                "children": []
                                            }
                                        ]
                                    }, {
                                        "data": {
                                            "text": "pass data into a function"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "Required argument"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "direct pass"
                                                        },
                                                        "children": []
                                                    }, {
                                                        "data": {
                                                            "text": "by reference"
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }, {
                                                "data": {
                                                    "text": "Keyword argument"
                                                },
                                                "children": [
                                                    {
                                                        "data": {
                                                            "text": "keyword : value"
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }, {
                                                "data": {
                                                    "text": "Recursion"
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "Variable Scope",
                                    "expand": false
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "local scope"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "global scope"
                                        },
                                        "children": []
                                    }
                                ]
                            }, {
                                "data": {
                                    "text": "lambda",
                                    "expand": false
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "data": {
                            "text": "module",
                        },
                        "children": [
                            {
                                "data": {
                                    "text": "define",
                                    "expand": false
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "pyfile"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "content"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "function / class / variable"
                                                },
                                                "children": []
                                            }, {
                                                "data": {
                                                    "text": "runnable code"
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "text": "import",
                                    "expand": false
                                },
                                "children": [
                                    {
                                        "data": {
                                            "text": "function"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "variable"
                                        },
                                        "children": []
                                    }, {
                                        "data": {
                                            "text": "runnable code"
                                        },
                                        "children": [
                                            {
                                                "data": {
                                                    "text": "__main__",
                                                    "isExplainNode": true
                                                },
                                                "children": []
                                            }]
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
