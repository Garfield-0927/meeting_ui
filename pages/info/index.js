// pages/info/index.js
Page({
  data: {
    confInfo:{
      name:"第三节智能优化与调度国际会议",
      simpleInfo:"该会议是指组织有领导有目的的议事活动。这个会议 主要的研究方向是智能优化与调度在芳香的偏上。"
    },
    tabbar:[
      {
        name:"简要信息",
        id:1,
        isActive:true
      },
      {
        name:"详细信息",
        id:2,
        isActive:false
      },
      {
        name:"收费说明",
        id:3,
        isActive:false
      },
      {
        name:"留言",
        id:4,
        isActive:false
      }
    ]
  },

  onLoad: function (options) {

  },

  itemChange(e)
  {
    let currentIndex = e.currentTarget.dataset.index.id;
    let tabBar = this.data.tabbar;
    for(let i in tabBar)
    {
      if(tabBar[i].id==currentIndex)
      {
        tabBar[i].isActive=true;
      }
      else
      {
        tabBar[i].isActive=false;
      }
    }
    this.setData({
      tabbar:tabBar
    })
  }

})