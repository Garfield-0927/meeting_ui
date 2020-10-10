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
    ],
    //detail_list:[
    //  {
    //    src="../../assets/time.png",
    //    content="报名截止时间:"
    //  },
    //  {
    //    src="../../assets/start.png",
    //    content="会议开始时间:"
    //  },
    //  {
    //    src="../../assets/end.png",
    //    content="会议结束时间:"
    //  },
    //  {
    //    src="../../assets/limit.png",
    //    content="人数上限:"
    //  },
    //  {
    //    src="../../assets/address.png",
    //    content="会议地点:"
    //  },
    //  {
    //    src="../../assets/hoster.png",
    //    content="主办方:"
    //  }
    //]
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