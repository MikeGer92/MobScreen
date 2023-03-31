<template>
    <div class="listitem">
        <img class="listitem__icon" :src="listitem.icon">
        <div class="listitem__title">{{ listitem.title }}</div>
        <div class="listitem__info">{{ listitem.info }}</div>
        <img class="listitem__goto" :src="require('@/assets/goto-icon.png')">
    </div>
</template>
<script>
export default {
    name: 'FriendCardListItem',
    props: {
        listitem: {
            type: Object,
            default: () => {}        
        }

    }

}

</script>

<style lang="scss">
.listitem {
    width: 100%;
    max-width: 335px;
    background: #FDFFFF;
}
</style>
